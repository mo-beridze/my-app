// import data from "../data.json"

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(el => (
          <li className="item" key={el.id}>
            <span className="label">{el.label}: </span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}

      </ul>
    </section>
  );
}




// <li class="item">
//           <span class="label">{stats.label}</span>
//           <span class="percentage">{stats.percentage}</span>
//         </li>
//         <li class="item">
//           <span class="label">{stats.label}</span>
//           <span class="percentage">{stats.percentage}</span>
//         </li>
//         <li class="item">
//           <span class="label">{stats.label}</span>
//           <span class="percentage">{stats.percentage}</span>
//         </li>