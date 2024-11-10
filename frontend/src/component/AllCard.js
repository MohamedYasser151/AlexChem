import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import data from './data2';
import Cards from './Cards';
import "./css/AllCards.css";
import "./css/Cards.css";
import { useTranslation } from 'react-i18next';

const AllCard = ({ heart,handleClick ,handleClickHeart}) => {
  const [dataCard, setDataCard] = useState([]); // حفظ البيانات في حالة state
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    // const login = Cookies.get('login');
    // if (login !== 'true') {
    //   navigate('/signin');
    // }

    const fetchData = async () => {
      try {
        const result = await data(t); // انتظار البيانات من data(t)
        setDataCard(result || []); // تعيين البيانات أو مصفوفة فارغة
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // استدعاء الدالة لجلب البيانات
  }, [navigate, t]);

  return (
    <div className="allcon">
    <div className="bodycar">
      <div className="cards">
        <section className="py-4 container">
          <div className="row justify-content-center">
            
              {dataCard.map((item) => (
                <div className="col-6 col-md-6 col-lg-3 mx-0 mb-4" key={item.id}>
                  <div className="card p-0 overflow-hidden shadow cards">
                    <Cards item={item} handleClick={handleClick} handleClickHeart={handleClickHeart} heart={heart}/>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default AllCard;
