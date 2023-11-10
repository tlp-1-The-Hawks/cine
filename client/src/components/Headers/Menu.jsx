
 import React from 'react'
 import { useState } from "react";
import { MagicMotion } from "react-magic-motion";
 export const Menu = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <MagicMotion>
      <aside className='Menu'
        style={{
          backgroundColor: "#cc0000",
          padding: "1rem",
          margin: "1rem 0",
          borderRadius: "0.65rem",
          width: isCollapsed ? "1.3rem" : "20rem",
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!isCollapsed && <h4 style={{ margin: 0 }}>Menu</h4>}
          <button
  style={{ cursor: "pointer", padding: 0, border: 0 }}
  onClick={() => setIsCollapsed(!isCollapsed)}
  title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
>
  {isCollapsed ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12.9999V10.9999H15.4853L12.2427 7.75724L13.6569 6.34303L19.3137 11.9999L13.6569 17.6567L12.2427 16.2425L15.4853 12.9999H1Z"
        fill="currentColor"
      />
      <path
        d="M20.2877 6V18H22.2877V6H20.2877Z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg
      style={{ minWidth: "24px", minHeight: "24px" }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.2877 11.0001V13.0001H7.80237L11.045 16.2428L9.63079 17.657L3.97394 12.0001L9.63079 6.34326L11.045 7.75748L7.80236 11.0001H22.2877Z"
        fill="currentColor"
      />
      <path d="M3 18V6H1V18H3Z" fill="currentColor" />
    </svg>
  )}
</button>

        </div>
 
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: 0,
            padding: 0,
          }}
        >
  <li
  style={{
    display: "flex",
    gap: "0.8rem",
    alignItems: "center",
    width: "fit-content",
  }}
>
<box-icon name='universal-access'></box-icon>

  Adidas
</li>

 
          <li
            style={{
              display: "flex",
              gap: "0.8rem",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <svg
              style={{ minWidth: "24px", minHeight: "24px" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 11.9554V12.0446C1.01066 14.7301 1.98363 17.1885 3.59196 19.0931C4.05715 19.6439 4.57549 20.1485 5.13908 20.5987C5.70631 21.0519 6.31937 21.4501 6.97019 21.7853C7.90271 22.2656 8.91275 22.6165 9.97659 22.8143C10.5914 22.9286 11.2243 22.9918 11.8705 22.9993C11.9136 22.9998 11.9567 23 11.9999 23C15.6894 23 18.9547 21.1836 20.9502 18.3962C21.3681 17.8125 21.7303 17.1861 22.0291 16.525C22.6528 15.1448 22.9999 13.613 22.9999 12C22.9999 8.73978 21.5816 5.81084 19.3283 3.79653C18.8064 3.32998 18.2397 2.91249 17.6355 2.55132C15.9873 1.56615 14.0597 1 11.9999 1C11.888 1 11.7764 1.00167 11.6653 1.00499C9.99846 1.05479 8.42477 1.47541 7.0239 2.18719C6.07085 2.67144 5.19779 3.29045 4.42982 4.01914C3.7166 4.69587 3.09401 5.4672 2.58216 6.31302C2.22108 6.90969 1.91511 7.54343 1.6713 8.20718C1.24184 9.37631 1.00523 10.6386 1 11.9554ZM20.4812 15.0186C20.8171 14.075 20.9999 13.0588 20.9999 12C20.9999 9.54265 20.0151 7.31533 18.4186 5.6912C17.5975 7.05399 16.5148 8.18424 15.2668 9.0469C15.7351 10.2626 15.9886 11.5603 16.0045 12.8778C16.7692 13.0484 17.5274 13.304 18.2669 13.6488C19.0741 14.0252 19.8141 14.487 20.4812 15.0186ZM15.8413 14.8954C16.3752 15.0321 16.904 15.22 17.4217 15.4614C18.222 15.8346 18.9417 16.3105 19.5723 16.8661C18.0688 19.2008 15.5151 20.7953 12.5788 20.9817C13.5517 20.0585 14.3709 18.9405 14.972 17.6514C15.3909 16.7531 15.678 15.8272 15.8413 14.8954ZM13.9964 12.6219C13.9583 11.7382 13.7898 10.8684 13.5013 10.0408C10.6887 11.2998 7.36584 11.3765 4.35382 9.97197C4.01251 9.81281 3.68319 9.63837 3.36632 9.44983C3.12787 10.2584 2.99991 11.1142 2.99991 12C2.99991 13.9462 3.61763 15.748 4.6677 17.2203C6.83038 14.1875 10.3685 12.4987 13.9964 12.6219ZM6.047 18.7502C7.77258 16.059 10.7714 14.5382 13.8585 14.6191C13.723 15.3586 13.4919 16.093 13.1594 16.8062C12.3777 18.4825 11.1453 19.805 9.67385 20.6965C8.31043 20.3328 7.07441 19.6569 6.047 18.7502ZM11.9999 3C13.7846 3 15.4479 3.51946 16.847 4.41543C16.2113 5.54838 15.3593 6.4961 14.368 7.23057C13.3472 5.57072 11.8752 4.16433 10.027 3.21692C10.6619 3.07492 11.3222 3 11.9999 3ZM8.80619 4.84582C10.4462 5.61056 11.7474 6.80659 12.6379 8.23588C10.3464 9.24654 7.64722 9.30095 5.19906 8.15936C4.83384 7.98905 4.48541 7.79735 4.15458 7.58645C4.91365 6.24006 6.00929 5.10867 7.32734 4.30645C7.82672 4.44058 8.32138 4.61975 8.80619 4.84582Z"
                fill="currentColor"
              />
            </svg>
            Dribbble
          </li>
 
          <li
            style={{
              display: "flex",
              gap: "0.8rem",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <svg
              style={{ minWidth: "24px", minHeight: "24px" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6C8.68629 6 6 8.68629 6 12H1C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23V18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z"
                fill="currentColor"
              />
              <path d="M7 18V13H12V18H7Z" fill="currentColor" />
              <path d="M3 18V22H7V18H3Z" fill="currentColor" />
              <path d="M3 18H1V16H3V18Z" fill="currentColor" />
            </svg>
            Digitalocean
          </li>
 
        </ul>
      </aside>
    </MagicMotion>
  );
}