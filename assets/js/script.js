// ページ切り替え機能
function showPage(pageId) {
    // すべてのページを非表示
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // ナビゲーションのアクティブ状態を更新
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 指定されたページを表示
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // 対応するナビリンクをアクティブに
        const activeNavLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
        if (activeNavLink) {
            activeNavLink.classList.add('active');
        }

        // アニメーション効果
        const elements = targetPage.querySelectorAll('.fade-in');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                element.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
            }, index * 200);
        });

        // ギャラリーページの場合、スライドショーを初期化
        if (pageId === 'photos') {
            setTimeout(() => {
                initGallerySlideshow();
            }, 300);
        }
    }
}

// ギャラリースライドショーの初期化
function initGallerySlideshow() {
    const slideshowTrack = document.getElementById('slideshow-track');
    if (!slideshowTrack) {
        console.error('スライドショートラックが見つかりません');
        return;
    }

    // すべてのギャラリー画像を取得
    const allImages = [];
    const galleryGrids = document.querySelectorAll('.gallery-grid');
    
    if (galleryGrids.length === 0) {
        console.error('ギャラリーグリッドが見つかりません');
        return;
    }
    
    galleryGrids.forEach(grid => {
        const images = grid.querySelectorAll('.gallery-item img');
        images.forEach(img => {
            if (img.src) {
                allImages.push(img.src);
            }
        });
    });

    console.log('取得した画像数:', allImages.length);

    if (allImages.length === 0) {
        console.warn('ギャラリー画像が見つかりません');
        return;
    }

    // 配列をシャッフル（ランダム化）
    const shuffledImages = allImages.sort(() => Math.random() - 0.5);
    
    // 画像を2回繰り返して無限ループ効果を作成
    const doubledImages = [...shuffledImages, ...shuffledImages];
    
    // スライドショートラックに画像を追加
    slideshowTrack.innerHTML = '';
    doubledImages.forEach(src => {
        const slideItem = document.createElement('div');
        slideItem.className = 'slideshow-item';
        slideItem.innerHTML = `<img src="${src}" alt="Gallery Image">`;
        slideshowTrack.appendChild(slideItem);
    });

    console.log('スライドショー初期化完了');
}

// スクロール効果
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.top-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(214, 188, 250, 0.15)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.9)';
        nav.style.boxShadow = 'none';
    }
});

// 初期アニメーション
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        if (element.closest('.page.active')) {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
            }, index * 200);
        }
    });

    // 初回読み込み時にギャラリーページがアクティブな場合
    const photosPage = document.getElementById('photos');
    if (photosPage && photosPage.classList.contains('active')) {
        setTimeout(() => {
            initGallerySlideshow();
        }, 500);
    }
});

// サイドナビゲーションの滑らかなホバー効果
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(15px)';
    });
    
    link.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'translateX(0)';
        }
    });
});

// コンタクトフォームの送信処理
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // メール本文を作成
            const mailBody = `
お名前: ${name}
メールアドレス: ${email}

【メッセージ】
${message}
            `.trim();
            
            // mailtoリンクを作成
            const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
            
            // メーラーを開く
            window.location.href = mailtoLink;
            
            // フォームをリセット
            contactForm.reset();
            
            // 確認メッセージ
            alert('メールアプリが開きます。送信を完了してください。');
        });
    }
});