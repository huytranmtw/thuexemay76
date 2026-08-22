LANDING PAGE — CHO THUÊ XE MÁY MĂNG ĐEN

1. CÁCH MỞ WEBSITE
- Giải nén thư mục.
- Mở file index.html bằng Chrome/Edge/Safari/Firefox.
- Không cần cài framework hoặc chạy lệnh build.

2. ĐỔI SỐ ĐIỆN THOẠI
- Mở index.html và assets/js/main.js.
- Tìm “0972726999” hoặc “0972 726 999” và thay bằng số mới.
- Trong schema JSON-LD, dùng định dạng +84 nếu phù hợp.

3. ĐỔI ĐỊA CHỈ
- Mở index.html.
- Tìm “30 Đường Võ Thị Sáu, Măng Đen, Quảng Ngãi” và thay bằng địa chỉ mới.

4. THAY LOGO
- Logo thật chưa được đính kèm nên website đang dùng wordmark MĐ bằng HTML/CSS.
- Lưu logo thật tại assets/images/logo.png hoặc logo.webp.
- Trong các vùng .brand ở header/footer, thay <span class="brand-mark">MĐ</span> bằng:
  <img src="assets/images/logo.webp" alt="Logo [Tên thương hiệu]" width="..." height="...">
- Không thay đổi biểu tượng/chữ trong logo gốc. Nếu logo trong suốt, giữ PNG/WebP có alpha.

5. THAY ẢNH
- Đặt ảnh WebP vào assets/images/.
- Giữ cùng tên file để không cần sửa HTML, hoặc cập nhật đường dẫn src trong index.html.
- Ảnh dưới màn hình đầu nên giữ loading="lazy".

6. ĐƯA WEBSITE LÊN HOSTING
- GitHub Pages: upload toàn bộ thư mục dự án vào repository và bật Pages.
- Netlify/Vercel: kéo thả hoặc import repository; publish root chứa index.html.
- Hosting thường: upload toàn bộ nội dung thư mục landing-page vào public_html/wwwroot.
- Sau khi có domain, thay https://YOUR-DOMAIN.example/ trong canonical, Open Graph, schema.

7. TÍCH HỢP GOOGLE SHEETS / API CHO FORM
- Mở assets/js/main.js.
- Tìm FORM_CONFIG.
- Đổi endpoint: '' thành URL Google Apps Script/API thật.
- Đổi mode: 'demo' thành mode khác, ví dụ 'api'.
- Kiểm tra CORS, phương thức POST và format JSON ở endpoint.
- Khi chưa có endpoint, form chỉ xác thực dữ liệu và thông báo rõ là chưa gửi lên máy chủ.

8. KIỂM TRA TRƯỚC KHI XUẤT BẢN
- Bổ sung logo thật.
- Cập nhật canonical và Open Graph URL theo domain thật.
- Xác nhận lại giá, chính sách dịp lễ/Tết, phạm vi giao xe, cứu hộ 24/7.
- Kiểm tra trên 360 / 390 / 768 / 1024 / 1440 px.
- Chạy Lighthouse trên bản đã deploy để đo Performance/Accessibility/Best Practices/SEO thực tế.
