# Dự án Máy in HCMUT

Dự án này là một ứng dụng web để quản lý dịch vụ in ấn tại HCMUT. Nó được xây dựng bằng React, TypeScript và Vite, với Tailwind CSS để tạo kiểu.

## Cấu trúc Dự án

```
.gitignore
.prettierrc
bun.lockb
components.json
eslint.config.js
index.html
package.json
postcss.config.js
public/
README.md
src/
  App.tsx
  assets/
  components/
    layout/
      header.tsx
      layout.tsx
      sidebar.tsx
    ui/
  hooks/
    use-mobile.tsx
    use-toast.ts
  index.css
  lib/
    utils.ts
  main.tsx
  routes/
    routes.tsx
  screens/
    history.tsx
    home.tsx
    print-document/
      printer.tsx
    report.tsx
vite-env.d.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Các Tệp và Thư mục Chính

- **src/App.tsx**: Thành phần ứng dụng chính.
- **src/main.tsx**: Điểm vào của ứng dụng.
- **src/routes/routes.tsx**: Định nghĩa các tuyến đường cho ứng dụng.
- **src/components/layout/**: Chứa các thành phần bố cục như `header.tsx` và `sidebar.tsx`.
- **src/components/ui/**: Chứa các thành phần giao diện người dùng như `button`, `modal`, `select`, v.v.
- **src/screens/**: Chứa các màn hình chính của ứng dụng như `home.tsx`, `history.tsx`, `printer.tsx`, `report.tsx`, và `print-document/`.
- **src/hooks/**: Chứa các hook tùy chỉnh như `use-mobile.tsx` và `use-toast.ts`.
- **src/lib/utils.ts**: Các hàm tiện ích được sử dụng trong toàn bộ ứng dụng.
- **index.html**: Tệp HTML chính.
- **tailwind.config.js**: Cấu hình Tailwind CSS.
- **tsconfig.json**: Cấu hình TypeScript.
- **vite.config.ts**: Cấu hình Vite.

## Bắt đầu

### Yêu cầu

- Node.js
- Npm (để quản lý gói)

### Cài đặt

1. Clone repository:
   ```sh
   git clone https://github.com/Baocq711/hcmut-printer.git
   cd hcmut-printer
   ```
2. Cài đặt các phụ thuộc:
   ```sh
   npm install --legacy-peer-deps
   ```

### Chạy Ứng dụng

Để khởi động máy chủ phát triển, chạy:

```sh
npm run dev
```

## Sử dụng

### Thành phần

- **Header**: Nằm trong `header.tsx`.
- **Sidebar**: Nằm trong `sidebar.tsx`.
- **Select**: Nằm trong `select.tsx`.
- **Pagination**: Nằm trong `pagination.tsx`.
- **Modal**: Nằm trong `modal.tsx`.
- **Checkbox**: Nằm trong `checkbox.tsx`.

### Hooks

- **useMobile**: Nằm trong `use-mobile.tsx`.
- **useToast**: Nằm trong `use-toast.ts`.

### Màn hình

- **Home**: Nằm trong `home.tsx`.
- **History**: Nằm trong `history.tsx`.
- **Printer**: Nằm trong `printer.tsx`.
- **Report**: Nằm trong `report.tsx`.
- **Print Document**: Nằm trong `print-document`.

## Cấu hình

### Tailwind CSS

Tailwind CSS được cấu hình trong `tailwind.config.js`.

### TypeScript

TypeScript được cấu hình trong `tsconfig.json` và `tsconfig.app.json`.

### Backend
# JSON Server: Các Route REST API

## 1. Giới Thiệu
File `database.json` chứa dữ liệu mẫu và JSON Server sẽ tự động tạo các endpoint REST API tương ứng. Dưới đây là danh sách các endpoint có sẵn:

## 2. Các Route API

### 2.1 Transaction
- **URL**: `http://localhost:3002/transaction`
- **Endpoints**:
  - `GET /transaction` - Lấy tất cả giao dịch.
  - `GET /transaction/:id` - Lấy giao dịch theo ID.
  - `POST /transaction` - Tạo giao dịch mới.
  - `PUT /transaction/:id` - Cập nhật giao dịch theo ID.
  - `DELETE /transaction/:id` - Xóa giao dịch theo ID.

### 2.2 Printer
- **URL**: `http://localhost:3002/printer`
- **Endpoints**:
  - `GET /printer` - Lấy tất cả thông tin máy in.
  - `GET /printer/:id` - Lấy thông tin máy in theo ID.
  - `POST /printer` - Thêm máy in mới.
  - `PUT /printer/:id` - Cập nhật thông tin máy in.
  - `DELETE /printer/:id` - Xóa máy in.

### 2.3 History
- **URL**: `http://localhost:3002/history`
- **Endpoints**:
  - `GET /history` - Lấy tất cả lịch sử giao dịch.
  - `GET /history/:id` - Lấy lịch sử giao dịch theo ID.
  - `POST /history` - Thêm lịch sử giao dịch mới.
  - `PUT /history/:id` - Cập nhật lịch sử giao dịch.
  - `DELETE /history/:id` - Xóa lịch sử giao dịch.

### 2.4 Report
- **URL**: `http://localhost:3002/report`
- **Endpoints**:
  - `GET /report` - Lấy tất cả báo cáo.
  - `GET /report/:id` - Lấy báo cáo theo ID.
  - `POST /report` - Tạo báo cáo mới.
  - `PUT /report/:id` - Cập nhật báo cáo.
  - `DELETE /report/:id` - Xóa báo cáo.

### 2.5 Payments
- **URL**: `http://localhost:3002/payments`
- **Endpoints**:
  - `GET /payments` - Lấy tất cả thông tin thanh toán.
  - `GET /payments/:id` - Lấy thông tin thanh toán theo ID.
  - `POST /payments` - Tạo thanh toán mới.
  - `PUT /payments/:id` - Cập nhật thanh toán.
  - `DELETE /payments/:id` - Xóa thanh toán.

## 3. Cách Chạy Server
1. Cài đặt JSON Server:
   ```bash
   npm install json-server --save-dev

2. Chạy Json Server
   ```bash
   npm start


### Vite

Vite được cấu hình trong `vite.config.ts`.

## Giấy phép

Dự án này được cấp phép theo Giấy phép MIT. Xem tệp LICENSE để biết chi tiết.

## Đóng góp

Đóng góp được chào đón! Vui lòng mở một vấn đề hoặc gửi một yêu cầu kéo.

## Liên hệ

Đối với bất kỳ câu hỏi hoặc thắc mắc nào, vui lòng liên hệ với những người duy trì dự án.
