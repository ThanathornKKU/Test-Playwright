# Test-Playright
Create for test writing playright.

# 🎭 Playwright Test Project

![Tests](https://github.com/yourusername/test-playwright/workflows/🎭%20Playwright%20Tests/badge.svg)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![License](https://img.shields.io/badge/license-ISC-blue)

โปรเจคสำหรับทดสอบ Playwright พร้อม GitHub Actions CI/CD

## 🚀 Quick Start

### ติดตั้ง Dependencies

```bash
npm install
```

### ติดตั้ง Playwright Browsers

```bash
npm run install:browsers
```

### เริ่ม HTTP Server

```bash
npm run server
```

### รัน Tests

```bash
# รัน tests ทั้งหมด
npm run test

# รันแบบเห็น browser
npm run test:headed

# รันแบบ UI mode
npm run test:ui

# รันเฉพาะ browser
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

## 📊 Test Reports

หลังจากรัน tests จะได้ HTML report ที่:

```bash
npm run test:report
```

## 🔧 Scripts Available

| Script | คำอธิบาย |
|--------|----------|
| `npm run server` | เริ่ม HTTP server |
| `npm run test` | รัน Playwright tests |
| `npm run test:headed` | รัน tests แบบเห็น browser |
| `npm run test:ui` | รัน tests ใน UI mode |
| `npm run test:debug` | รัน tests ใน debug mode |
| `npm run test:report` | แสดง HTML report |
| `npm run test:chrome` | รันเฉพาะ Chrome |
| `npm run test:firefox` | รันเฉพาะ Firefox |
| `npm run test:webkit` | รันเฉพาะ Safari |
| `npm run clean` | ลบ test results |
| `npm run audit` | ตรวจสอบ security |

## 🎯 CI/CD Pipeline

โปรเจคนี้ใช้ GitHub Actions สำหรับ:

### ✅ Automated Testing
- รัน tests เมื่อมี push หรือ pull request
- ทดสอบบน browsers หลัก (Chrome, Firefox, Safari)
- สร้าง HTML report อัตโนมัติ
- Comment ผลลัพธ์ใน Pull Request

### 🚀 Deployment
- Deploy demo ไปยัง GitHub Pages
- เผยแพร่ test reports
- อัปเดตอัตโนมัติเมื่อ push ไปยัง main branch

### 🔒 Security
- รัน npm audit
- ตรวจสอบ outdated packages
- ตรวจสอบ dependencies

## 📁 Project Structure

```
test-playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml     # GitHub Actions workflow
├── tests/
│   └── *.spec.ts             # Test files
├── playwright-report/        # HTML reports (generated)
├── test-results/            # Test artifacts (generated)
├── index.html               # Demo application
├── playwright.config.ts     # Playwright configuration
├── package.json            # Project dependencies
└── README.md              # This file
```

## 🌐 Demo Application

เปิดไฟล์ `index.html` ในเบราว์เซอร์หรือผ่าน HTTP server:

**ข้อมูลสำหรับทดสอบ:**
- Username: `test`
- Password: `password123`

## 🔗 Links

- [📊 Latest Test Report](https://yourusername.github.io/test-playwright/test-report/)
- [🎭 Playwright Documentation](https://playwright.dev/)
- [🚀 GitHub Actions](https://github.com/features/actions)

## 🤝 Contributing

1. Fork repository
2. สร้าง feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. สร้าง Pull Request

## 📝 License

This project is licensed under the ISC License.

---

🤖 **Automated testing powered by Playwright + GitHub Actions**