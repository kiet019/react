import React, { useEffect, useState } from "react";
import { Card, CardTitle, Icon, Pagination } from "react-materialize";
let pages = require("../shared/ListOfNews.json");
export default function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [activePage, setActivePage] = useState(1);
  const handlePageChange = (page) => {
    setActivePage(page);
  };
  return (
    <div className="news">
      <div className="title">LASTEST</div>
      <div className="container1">
        {pages[activePage].news.map((item, index) => (
          <Card
            key={index}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image={"../" + item.img} />}
            horizontal
            revealIcon={<Icon>more_vert</Icon>}
          >
            <p className="card-title">{item.title}</p>
            <p className="by">{item.by}</p>
            <p className="description">{item.description}</p>
          </Card>
        ))}
      </div>
      <Pagination
        activePage={activePage}
        onSelect={handlePageChange}
        items={2}
        leftBtn={<Icon>chevron_left</Icon>}
        rightBtn={<Icon>chevron_right</Icon>}
      />
    </div>
  );
}
