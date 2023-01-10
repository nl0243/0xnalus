import React, { FC } from 'react';
import linksJson from '../data/links.json'
import styles from '../styles/LinksTable.module.css';

const getRow = (el: any) => {
  return (
      <tr>
        <td>{el.name}</td>
        <td><a href={el.value} target={"_blank"} rel={"noreferrer"} >{el.value}</a></td>
        <td>{el.type}</td>
        <td>{el.description}</td>
      </tr>
  );
}

const LinksTable: FC = () => {
  return (
      <div>
        <div className={styles.tableBox}>
          <table className={styles.styledTable}>
              <thead>
              <tr>
                <th>Name</th>
                <th>Link</th>
                <th>Tag</th>
                <th>Description</th>
              </tr>
              <br/>
              </thead>
              <tbody>
              {linksJson.urlArray.map((row) => (
                getRow(row)
              ))}
              </tbody>
            </table>
        </div>
      </div>
  );
}


export default LinksTable;
