# Xây dựng API cho app thương mại điện tử (NestJS, MongoDB)

## Các chức năng chính:

### Đăng ký và Đăng nhập:
- Đăng ký và đăng nhập cho người dùng và người bán.
- **Từ chối đăng ký trùng lặp**: Hệ thống không cho phép đăng ký tài khoản với email đã tồn tại.
- Quản lý token cho người bán để bảo mật các API riêng tư.

### Sản phẩm:
- **CRUD sản phẩm**:
  - 🛍️ Tạo sản phẩm mới.
  - ✏️ Chỉnh sửa sản phẩm.
  - 🗑️ Xóa sản phẩm.
  - 👁️ Xem danh sách tất cả sản phẩm hoặc sản phẩm riêng của người dùng.

### Đơn hàng:
- Tạo đơn hàng từ tất cả các sản phẩm trong giỏ hàng.
- Xem danh sách các đơn hàng của người mua.

### Kiểm thử:
- Hệ thống đã được kiểm thử với **Jest** và **Supertest**, bao gồm kiểm thử các chức năng:
  - Đăng ký và đăng nhập người dùng/người bán.
  - Tạo, đọc, cập nhật, xóa sản phẩm.
  - Tạo và liệt kê đơn hàng.

## Công nghệ đã sử dụng:

### Backend:
- **NestJS**: Framework chính cho việc xây dựng API.
- **Mongoose**: ORM cho MongoDB.

### Thư viện và Công cụ khác:
- **Axios**: Gửi yêu cầu HTTP.
- **Bcrypt**: Mã hóa mật khẩu.
- **Passport.js** và **passport-jwt**: Xác thực người dùng bằng JWT.
- **Dotenv**: Quản lý biến môi trường.
- **Reflect-metadata**: Sử dụng decorators trong TypeScript.
- **Jest & Supertest**: Kiểm thử ứng dụng.

### Cơ sở dữ liệu:
- **MongoDB**: Cơ sở dữ liệu NoSQL để lưu trữ sản phẩm, đơn hàng, và thông tin người dùng.

