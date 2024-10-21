import React, { useEffect, useState } from "react";
import img from './image/ne.png'
function Nefertari() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // نستخدم تايمر لتأخير فتح الباب بعد تحميل الصفحة
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // فتح الباب بعد ثانية

    return () => clearTimeout(timer); // تنظيف التايمر عند انتهاء المكون
  }, []);

  return (
    <div className="allne">
    <div className="containerr">
  <img className="background-image" src={img} alt="" />
  <div className={`door door-left ${isOpen ? "open" : ""}`}></div>
  <div className={`door door-right ${isOpen ? "open" : ""}`}></div>
  {isOpen && <h1 className="nefertari">Nefertari</h1>}
</div>

    </div>
  );
}

export default Nefertari;
