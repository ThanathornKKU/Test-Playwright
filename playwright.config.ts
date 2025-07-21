// import { defineConfig, devices } from '@playwright/test';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // import dotenv from 'dotenv';
// // import path from 'path';
// // dotenv.config({ path: path.resolve(__dirname, '.env') });

// /**
//  * See https://playwright.dev/docs/test-configuration.
//  */
// export default defineConfig({

//   // โฟลเดอร์ที่เก็บไฟล์ test
//   testDir: './tests',

//   /* Run tests in files in parallel */
//   // รัน test พร้อมกันหลายตัว (เร็วขึ้น) true , ถ้าอยากให้รัน test ช้าลง (ทีละตัว) false
//   fullyParallel: true,

//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,

//   /* Retry on CI only */
//   // ถ้ารันบน CI (GitHub Actions) → test ล้มเหลวจะลองใหม่ 2 ครั้ง
//   // ถ้ารันใน local → ไม่ลองใหม่
//   // ถ้าอยากให้ retry เสมอ
//   // retries: 1,
//   retries: process.env.CI ? 2 : 0,

//   /* Opt out of parallel tests on CI. */
//   // ถ้ารันบน CI → ใช้ worker 1 ตัว (ประหยัด resources)
//   // ถ้ารันใน local → ใช้ตามจำนวน CPU cores
//   //  workers: 2,  // บังคับใช้ 2 workers
//   // หรือ
//   // workers: '50%',  // ใช้ 50% ของ CPU cores
//   workers: process.env.CI ? 1 : undefined,

//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   // สร้าง report เป็น HTML
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('/')`. */
//     // baseURL: 'http://localhost:3000',  // URL หลักของเว็บ (ถ้าต้องการ)
//     // baseURL: 'http://localhost:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     // บันทึก trace เมื่อ test ล้มเหลวครั้งแรก
//     trace: 'on-first-retry',
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     // test จะรันบน 3 browsers หลัก
//     {
//       // Chrome บน Desktop
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       // Firefox บน Desktop
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       // Safari บน Desktop
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },

//     /* Test against mobile viewports. */
//     // ทดสอบบน mobile โดยจำลอง screen size และ user agent
//     {
//       name: 'Mobile Chrome',
//       use: { ...devices['Pixel 5'] },
//     },
//     {
//       name: 'Mobile Safari',
//       use: { ...devices['iPhone 12'] },
//     },

//     /* Test against branded browsers. */
//     // ใช้ browser ตัวจริงที่ติดตั้งในเครื่อง (Edge, Chrome) แทน Playwright browsers
//     {
//       name: 'Microsoft Edge',
//       use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     },
//     {
//       name: 'Google Chrome',
//       use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     },
//   ],

//   /* Run your local dev server before starting the tests */
//   // ถ้าเปิด comment จะเริ่ม server ก่อนรัน test (สำหรับ local development)

//   // webServer: {
//   //   command: 'npm run start',              // สั่งเริ่ม server
//   //   url: 'http://localhost:3000',          // URL ที่รอให้ server พร้อม
//   //   reuseExistingServer: !process.env.CI,  // ใช้ server เดิมถ้ามี
//   // },
// });





// import { defineConfig } from '@playwright/test';
// import { devices } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests',
//   fullyParallel: true,
//   use: {
//     baseURL: 'http://localhost:8080',
//     screenshot: 'only-on-failure',
//     video: undefined,
//   },
//   reporter: 'html',
//    /* Configure projects for major browsers */
//   projects: [
//     // test จะรันบน 3 browsers หลัก
//     {
//       // Chrome บน Desktop
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       // Firefox บน Desktop
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       // Safari บน Desktop
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },

//     /* Test against mobile viewports. */
//     // ทดสอบบน mobile โดยจำลอง screen size และ user agent
//     {
//       name: 'Mobile Chrome',
//       use: { ...devices['Pixel 5'] },
//     },
//     {
//       name: 'Mobile Safari',
//       use: { ...devices['iPhone 12'] },
//     },

//     /* Test against branded browsers. */
//     // ใช้ browser ตัวจริงที่ติดตั้งในเครื่อง (Edge, Chrome) แทน Playwright browsers
//     {
//       name: 'Microsoft Edge',
//       use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     },
//     {
//       name: 'Google Chrome',
//       use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     },
//   ],
// }); 



import { defineConfig } from '@playwright/test';
import { devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  
  /* ห้ามใช้ test.only ใน CI */
  forbidOnly: !!process.env.CI,
  
  /* Retry tests เมื่อรันใน CI */
  retries: process.env.CI ? 2 : 0,
  
  /* ลดจำนวน workers ใน CI เพื่อความเสถียร */
  workers: process.env.CI ? 1 : undefined,
  
  use: {
    baseURL: 'http://localhost:8080',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    /* เพิ่ม timeout สำหรับ CI */
    actionTimeout: process.env.CI ? 10000 : 0,
    navigationTimeout: process.env.CI ? 15000 : 0,
  },
  
  /* Reporter configuration */
  reporter: process.env.CI ? [
    ['html', { outputFolder: 'playwright-report' }],
    ['github'],  // แสดงผลใน GitHub Actions
    ['list']     // แสดงรายการใน console
  ] : 'html',
  
  /* Configure projects for major browsers */
  projects: [
    // รัน browsers หลักทั้งใน local และ CI
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        /* การตั้งค่าเพิ่มเติมสำหรับ CI */
        ...(process.env.CI && {
          launchOptions: {
            args: [
              '--no-sandbox',
              '--disable-setuid-sandbox',
              '--disable-dev-shm-usage',
              '--disable-web-security'
            ]
          }
        })
      },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Mobile browsers - รันเฉพาะใน local */
    ...(!process.env.CI ? [
      {
        name: 'Mobile Chrome',
        use: { ...devices['Pixel 5'] },
      },
      {
        name: 'Mobile Safari',
        use: { ...devices['iPhone 12'] },
      },
    ] : []),

    /* Branded browsers - รันเฉพาะใน local */
    ...(!process.env.CI ? [
      {
        name: 'Microsoft Edge',
        use: { ...devices['Desktop Edge'], channel: 'msedge' },
      },
      {
        name: 'Google Chrome',
        use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      },
    ] : [])
  ],

  /* Output directory */
  outputDir: 'test-results/',
  
  /* เพิ่ม timeout ใน CI */
  timeout: process.env.CI ? 30000 : 15000,
  
  /* Expect timeout */
  expect: {
    timeout: process.env.CI ? 10000 : 5000,
  },
});