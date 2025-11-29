import { layout } from './layout';

export function chatListPage(conversations: any[], user: any) {
  return layout(`
    <div class="box">
      <h2>
        <a href="/profile" style="color:#5f4a82;margin-left:8px;" title="رجوع">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </a>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        المحادثات
      </h2>
      ${conversations.length > 0 ? `
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${conversations.map(c => `
            <a href="/chat/${c.id}" style="display:flex;align-items:center;gap:12px;padding:12px;background:${c.unread_count > 0 ? '#f8f5f0' : '#fff'};border:1px solid #e8e4de;border-radius:8px;text-decoration:none;">
              <div style="width:48px;height:48px;border-radius:50%;background:#5f4a82;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:18px;flex-shrink:0;">
                ${c.other_user_avatar ? `<img src="${c.other_user_avatar}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">` : (c.other_user_name?.charAt(0) || '؟')}
              </div>
              <div style="flex:1;min-width:0;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                  <b style="color:#333;">${c.other_user_name || 'مستخدم'}</b>
                  <span class="meta">${formatTime(c.last_message_at)}</span>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span class="meta" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${c.last_message?.substring(0, 40) || 'ابدأ المحادثة...'}</span>
                  ${c.unread_count > 0 ? `<span style="background:#5f4a82;color:#fff;padding:2px 8px;border-radius:12px;font-size:11px;">${c.unread_count}</span>` : ''}
                </div>
                ${c.listing_title ? `<div class="meta" style="margin-top:4px;font-size:11px;">📦 ${c.listing_title.substring(0, 25)}...</div>` : ''}
              </div>
            </a>
          `).join('')}
        </div>
      ` : `
        <div style="text-align:center;padding:40px 20px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" style="width:64px;height:64px;margin-bottom:16px;"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          <p style="color:#888;margin-bottom:12px;">لا توجد محادثات بعد</p>
          <a href="/" class="btn" style="color:#fff;">تصفح الإعلانات</a>
        </div>
      `}
    </div>
  `, { title: 'المحادثات | نقلة', user });
}

export function chatRoomPage(conversation: any, messages: any[], user: any) {
  const other = {
    id: conversation.buyer_id === user.id ? conversation.seller_id : conversation.buyer_id,
    name: conversation.other_user_name || 'مستخدم',
    avatar: conversation.other_user_avatar
  };

  return layout(`
    <div class="box" style="display:flex;flex-direction:column;height:calc(100vh - 280px);min-height:400px;">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:12px;padding-bottom:12px;border-bottom:1px solid #eee8e0;">
        <a href="/chat" style="color:#5f4a82;display:flex;align-items:center;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;"><path d="M15 18l-6-6 6-6"/></svg>
        </a>
        <div style="width:40px;height:40px;border-radius:50%;background:#5f4a82;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;">
          ${other.avatar ? `<img src="${other.avatar}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">` : other.name.charAt(0)}
        </div>
        <div style="flex:1;">
          <b>${other.name}</b>
          ${conversation.listing_title ? `<div class="meta" style="font-size:11px;">📦 <a href="/listing/${conversation.listing_id}">${conversation.listing_title}</a></div>` : ''}
        </div>
        <span id="status" class="meta">متصل</span>
      </div>

      <!-- Messages -->
      <div id="msgs" style="flex:1;overflow-y:auto;padding:16px 8px;background:#f9f7f5;">
        ${messages.length > 0 ? messages.map(m => msgHtml(m, user.id, other.name, other.avatar)).join('') : `
          <div style="text-align:center;padding:40px;color:#888;">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="2" style="width:48px;height:48px;margin-bottom:8px;"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            <p>ابدأ المحادثة مع ${other.name}</p>
          </div>
        `}
      </div>

      <!-- Input -->
      <form id="msg-form" style="display:flex;gap:8px;padding-top:12px;border-top:1px solid #eee8e0;align-items:center;">
        <label for="img-input" style="cursor:pointer;padding:8px;border-radius:8px;background:#f5f3f0;display:flex;align-items:center;justify-content:center;" title="إرفاق صورة">
          <svg viewBox="0 0 24 24" fill="none" stroke="#5f4a82" stroke-width="2" style="width:20px;height:20px;"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
        </label>
        <input type="file" id="img-input" accept="image/*" style="display:none;">
        <input type="text" id="msg-input" placeholder="اكتب رسالتك..." style="flex:1;" autocomplete="off">
        <button type="submit" class="btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
          إرسال
        </button>
      </form>
      <div id="img-preview" style="display:none;margin-top:8px;position:relative;">
        <img id="preview-img" style="max-height:100px;border-radius:8px;">
        <button type="button" id="cancel-img" style="position:absolute;top:-8px;right:-8px;background:#c00;color:#fff;border:none;border-radius:50%;width:24px;height:24px;cursor:pointer;font-size:16px;">×</button>
      </div>
    </div>

    <script>
      const uid = ${user.id}, cid = ${conversation.id};
      const msgs = document.getElementById('msgs');
      const statusEl = document.getElementById('status');
      const imgInput = document.getElementById('img-input');
      const imgPreview = document.getElementById('img-preview');
      const previewImg = document.getElementById('preview-img');
      const cancelImg = document.getElementById('cancel-img');
      let pendingImage = null;

      msgs.scrollTop = msgs.scrollHeight;

      // Image compression
      async function compressImage(file, maxSize = 800, quality = 0.8) {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement('canvas');
              let w = img.width, h = img.height;
              if (w > h) {
                if (w > maxSize) { h = h * maxSize / w; w = maxSize; }
              } else {
                if (h > maxSize) { w = w * maxSize / h; h = maxSize; }
              }
              canvas.width = w;
              canvas.height = h;
              canvas.getContext('2d').drawImage(img, 0, 0, w, h);
              canvas.toBlob((blob) => {
                resolve(new File([blob], file.name, { type: 'image/jpeg' }));
              }, 'image/jpeg', quality);
            };
            img.src = e.target.result;
          };
          reader.readAsDataURL(file);
        });
      }

      // Image selection
      imgInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        pendingImage = await compressImage(file);
        previewImg.src = URL.createObjectURL(pendingImage);
        imgPreview.style.display = 'block';
      };

      cancelImg.onclick = () => {
        pendingImage = null;
        imgPreview.style.display = 'none';
        imgInput.value = '';
      };

      // Send message (uses cookie auth)
      document.getElementById('msg-form').onsubmit = async e => {
        e.preventDefault();
        const inp = document.getElementById('msg-input'), txt = inp.value.trim();
        if (!txt && !pendingImage) return;

        inp.value = '';
        const imageToSend = pendingImage;
        pendingImage = null;
        imgPreview.style.display = 'none';
        imgInput.value = '';

        // Show optimistic message
        if (txt) {
          addMsg({ content: txt, sender_id: uid, created_at: new Date().toISOString() });
        }
        if (imageToSend) {
          addMsg({ content: '[صورة]', image_url: URL.createObjectURL(imageToSend), sender_id: uid, created_at: new Date().toISOString() });
        }

        try {
          if (imageToSend) {
            // Upload image first
            const formData = new FormData();
            formData.append('image', imageToSend);
            if (txt) formData.append('content', txt);

            await fetch('/api/chat/conversations/${conversation.id}/messages', {
              method: 'POST',
              credentials: 'include',
              body: formData
            });
          } else {
            await fetch('/api/chat/conversations/${conversation.id}/messages', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify({ content: txt })
            });
          }
        } catch (err) {
          console.error('Send error:', err);
        }
      };

      function addMsg(m) {
        const own = m.sender_id === uid;
        const time = new Date(m.created_at).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
        const div = document.createElement('div');
        div.style.cssText = 'display:flex;margin-bottom:12px;' + (own ? 'flex-direction:row-reverse;' : '');

        let content = '';
        if (m.image_url) {
          content = '<img src="' + m.image_url + '" style="max-width:200px;max-height:200px;border-radius:8px;cursor:pointer;" onclick="window.open(this.src)">';
          if (m.content && m.content !== '[صورة]') {
            content += '<div style="margin-top:6px;">' + escapeHtml(m.content) + '</div>';
          }
        } else {
          content = '<div style="word-wrap:break-word;">' + escapeHtml(m.content) + '</div>';
        }

        div.innerHTML = \`
          <div style="max-width:70%;padding:10px 14px;border-radius:\${own ? '16px 16px 4px 16px' : '16px 16px 16px 4px'};background:\${own ? '#5f4a82' : '#fff'};color:\${own ? '#fff' : '#333'};box-shadow:0 1px 2px rgba(0,0,0,0.1);">
            \${content}
            <div style="font-size:10px;opacity:0.7;text-align:\${own ? 'left' : 'right'};margin-top:4px;">\${time}</div>
          </div>
        \`;
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
      }

      function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
      }

      // Real-time with Soketi
      const pusher = new Pusher('naqla_app_key', {
        wsHost: location.hostname,
        wsPort: location.protocol === 'https:' ? 443 : 6001,
        wssPort: 443,
        forceTLS: location.protocol === 'https:',
        enabledTransports: ['ws', 'wss'],
        disableStats: true
      });

      pusher.connection.bind('connected', () => {
        statusEl.textContent = 'متصل';
        statusEl.style.color = '#090';
      });

      pusher.connection.bind('disconnected', () => {
        statusEl.textContent = 'غير متصل';
        statusEl.style.color = '#c00';
      });

      const channel = pusher.subscribe('conversation-${conversation.id}');
      channel.bind('new-message', m => {
        if (m.sender_id !== uid) addMsg(m);
      });

      // Also subscribe to user notifications
      const userChannel = pusher.subscribe('user-' + uid);
      userChannel.bind('notification', n => {
        if (Notification.permission === 'granted' && document.hidden) {
          new Notification(n.title, { body: n.body });
        }
      });

      // Request notification permission
      if (Notification.permission === 'default') {
        Notification.requestPermission();
      }
    </script>
  `, { title: 'محادثة مع ' + other.name + ' | نقلة', user });
}

function msgHtml(m: any, uid: number, otherName: string, otherAvatar?: string): string {
  const own = m.sender_id === uid;
  const time = new Date(m.created_at).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
  return `
    <div style="display:flex;margin-bottom:12px;${own ? 'flex-direction:row-reverse;' : ''}">
      <div style="max-width:70%;padding:10px 14px;border-radius:${own ? '16px 16px 4px 16px' : '16px 16px 16px 4px'};background:${own ? '#5f4a82' : '#fff'};color:${own ? '#fff' : '#333'};box-shadow:0 1px 2px rgba(0,0,0,0.1);">
        <div style="word-wrap:break-word;">${escapeHtmlServer(m.content)}</div>
        <div style="font-size:10px;opacity:0.7;text-align:${own ? 'left' : 'right'};margin-top:4px;">${time}</div>
      </div>
    </div>
  `;
}

function escapeHtmlServer(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatTime(d: string): string {
  if (!d) return '-';
  const diff = Math.floor((Date.now() - new Date(d).getTime()) / 86400000);
  if (diff === 0) return new Date(d).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
  if (diff === 1) return 'أمس';
  if (diff < 7) return diff + 'ي';
  return new Date(d).toLocaleDateString('ar-SA');
}
