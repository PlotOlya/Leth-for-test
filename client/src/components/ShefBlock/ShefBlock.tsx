import React, { memo } from "react";
import "./ShefBlock.css";

function ShefBlock(): JSX.Element {
  return (
    <div id="shefBlock" className="shefBlock-container">
      <div className='shefBlock-flex'>
      <div className='shefBlock-title-text'>
        <h2 className="ShefBlock-title">О шефе</h2>
          <div className="ShefBlock-text">
            <p>
              {" "}
              Денис Назаров – шеф-повар ресторана LETH, авангардист и адепт сенсорной кухни. 
              Начал работать помощником повара в 14 лет на добровольных
              началах, потом поступил на среднее-специальное, а в
              18 лет уже взял свой первый проект в качестве шеф-повара в ресторане
              на Петроградской. 
              <br/>
              <br/>
              &quot;В те годы меня привлекли труды Рони Эмборга, я
              прочитал его книгу The Wizard Cookbook, вдохновился и решил
              развиваться в этом гастрономическом направлении. Изначально мне
              хотелось работать в формате скульптуризации и визуализации.
              <br/>
              <br/>
              Я — повар-художник. Меня привлекает визуальная составляющая.
              Вдохновение — это насмотренность. Вдохновиться можно всем, чем угодно,
              например, искусством, поп-культурой, работой иностранных коллег по
              цеху и ребят со звездочками. Не могу сказать, что хожу по лесу и
              вдохновляюсь природой, как все это говорят, — такого нет!&quot;
            </p>
          </div>
        </div>
          <div className="ShefBlock-img">
            <img src="photos/photo_shef.jpeg" alt="photo_shef" />
          </div>
      </div>
    </div>
  );
}

export default memo(ShefBlock);
