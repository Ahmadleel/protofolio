// دالة لتحريك شريط التقدم
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
  
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-progress') + '%';
      bar.style.width = targetWidth;
    });
  }
  
  // تشغيل الدالة عند تحميل الصفحة
  window.onload = animateProgressBars;