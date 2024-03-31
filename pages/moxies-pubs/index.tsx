import dynamic from 'next/dynamic';
import { getSheetData } from '../api/google-sheets';

const MapWithPinsDynamic = dynamic(() => import('@/components/MapWithPins'), {
  ssr: false,
});

const MoxiesPubs = ({ data }: { data: any }) => {
  function weeksSinceDate(targetDate: Date) {
    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds between the target date and the current date
    const differenceInMillis = currentDate.getTime() - targetDate.getTime();

    // Convert the difference from milliseconds to weeks
    const millisecondsInWeek = 1000 * 60 * 60 * 24 * 7;
    const weeksDifference = Math.ceil(differenceInMillis / millisecondsInWeek);

    return weeksDifference;
  }

  function weeksUntilDate(targetDate: Date) {
    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds between the target date and the current date
    const differenceInMillis = targetDate.getTime() - currentDate.getTime();

    // Convert the difference from milliseconds to weeks
    const millisecondsInWeek = 1000 * 60 * 60 * 24 * 7;
    const weeksDifference = Math.ceil(differenceInMillis / millisecondsInWeek);

    return weeksDifference;
  }

  const weeksRemaining = weeksUntilDate(new Date('2025-01-01'));
  const weeksSince = weeksSinceDate(new Date('2024-02-12'));

  return (
    <>
      <div className="text-center">
        <p>Weeks to go: {weeksRemaining}</p>
        <p>Weeks alive: {weeksSince}</p>
        <p>Pubs gone to: {data.length}</p>
        <p>Pubs remaining (47 needed): {47 - data.length}</p>
      </div>
      <div className="w-full h-96 overflow-hidden">
        <MapWithPinsDynamic pins={data} />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const data = await getSheetData();

  const keys = data[0];
  const values = data.slice(1);

  const formattedData = values.map((row: any) => {
    return row.reduce((acc: any, value: any, index: number) => {
      // acc[keys[index]] = { ...value, position: [value.lat, value.lng] };
      // const updatedValue = { value, position: [value.lat, value.lng] };
      acc[keys[index]] = value;
      acc['position'] = [acc.lat, acc.lng];
      return acc;
    }, {});
  });

  return {
    props: {
      data: formattedData,
    },
  };
}

export default MoxiesPubs;
