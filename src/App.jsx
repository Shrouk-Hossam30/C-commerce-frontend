import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// --- Components ---
import Navbar from "./component/TopMenu";
import { FooterSection } from "./component/BottomBar";
import Preloader from "./component/Preloader"; // تأكد من إنشاء هذا الملف في مجلد component

// --- Pages ---
import HomePage from "./pages/HomePage";
import ItemsList from "./pages/ItemsList";
import ItemInfo from "./pages/ItemInfo";
import UserLogin from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import EditProfile from "./pages/EditProfile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* اللودر سيظهر في بداية تحميل التطبيق فقط */}
        <Preloader />

        {/* الهيدر ثابت في كل الصفحات */}
        <Navbar />

        {/* محتوى الصفحات المتغير */}
        <main
          style={{
            minHeight: "80vh",
            backgroundColor: "#ffffff", // خلفية بيضاء نظيفة للمحتوى
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ItemsList />} />
            <Route path="/item/:id" element={<ItemInfo />} />

            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<CreateAccount />} />
            <Route path="/edit-profile" element={<EditProfile />} />

            {/* صفحة الخطأ 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* الفوتر الاحترافي ثابت في الأسفل */}
        <FooterSection />
      </div>
    </BrowserRouter>
  );
};

export default App;
