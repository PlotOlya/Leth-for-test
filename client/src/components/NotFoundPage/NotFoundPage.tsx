import React, { memo } from "react";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

function NotFoundPage(): JSX.Element {
  return (
    <div className="notFound-container">
     
        <div className="notFound-text">
        <h2>404</h2>
        <div>
          <p>Cтраница не найдена!</p>
          <p>
            Мы сожалеем. Но страница, которую вы ищете, недоступна. Возможно,
            вам стоит поискать еще раз.
          </p>
        </div>
        </div>
    
        <Link className="go-back-btn" to="/">
          Вернуться в ресторан
        </Link>
      

      <div className="notFound-img">
        <img
          src="https://otkritkis.com/wp-content/uploads/2022/07/gwzxp.gif"
          alt="gif-404-page"
        />
      </div>
    </div>
  );
}

export default memo(NotFoundPage);
