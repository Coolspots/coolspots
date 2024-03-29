import React, { ReactElement } from 'react';
import Link from 'next/link';
import styles from './SpotList.module.scss';
import { Spot } from '../../types/types';

type SpotListProps = {
  spots: Spot[];
};

const SpotList = ({ spots }: SpotListProps): ReactElement => {
  return (
    <>
      <h3 className={styles.listTitle}>List of cool spots</h3>
      <ul
        role="list"
        className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${styles.spotList}`}
      >
        {spots.map((spot) => {
          return (
            <Link key={spot.id} href={`/DetailPage/${spot.id}`}>
              <li
                className={`col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow ${styles.clickableArea}`}
              >
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">
                        {spot.fields.name}
                      </h3>
                    </div>
                  </div>
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                    src={spot.fields.imgLink}
                    alt={`${spot.fields.name}'s image`}
                  />
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default SpotList;
