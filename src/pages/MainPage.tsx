import { observer } from 'mobx-react-lite';

import Country from './Country';
import CountryStore from '../stores/country-store';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      {CountryStore.countries.map((country) => (
        <div key={country.name}>
          <Country />
        </div>
      ))}
    </div>
  );
};
export default observer(MainPage);
