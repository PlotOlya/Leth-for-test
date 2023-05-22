import React, { memo } from "react";
import "./DescriptionBlock.css";

function DescriptionBlock(): JSX.Element {
  return (
    <div className="descriptionBlock-container ">
      <div className="descriptionBlock-title">
        <h2>Ресторан Leth</h2>
      </div>

      <div className="descriptionBlock-text">
        Мы взаимодействуем с этим миром посредством наших чувств. То, что мы
        испытываем, доставляется прямиком в наше сознание и превращается в опыт
        или воспоминания. Чувства — наша единственная связь с внешним миром.
        Аромат, вид, цвет, звук — все это является нашими инструментами в
        диалоге с гостем. В сенсорной кухне мы стараемся вовлечь гостя в игру,
        погружая его в созданную нами идею. Мы руководствуемся многими
        правилами, но можно выделить самое главное из них: никакое блюдо не
        должно быть просто средним. Оно должно вызывать эмоцию. И мы прилагаем
        все усилия, чтобы эмоция была положительной. Придумать саму идею
        сложнее, чем ее реализовать. В такие моменты к нам на помощь приходят
        современные технологии, су-вид и различные текстуры.
      </div>

      <div className="descriptionBlock-image">
        <img
          src="photos/sitePhotos/111-76.jpg"
          className=""
          alt="foto restoran"
        />
      </div>
    </div>
  );
}

export default memo(DescriptionBlock);
