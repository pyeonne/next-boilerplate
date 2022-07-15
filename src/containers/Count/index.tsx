import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import useCountViewModel from './count.viewmodel';
import { Button } from '@components/common/atoms/Button';

function CountContainer() {
  const countViewModel = useCountViewModel();

  return (
    <>
      <p>count: {countViewModel.count}</p>
      <div style={{ display: 'flex', gap: '5px' }}>
        <Button label="plus" primary onClick={countViewModel.handleAddCount} />
        <Button label="minus" onClick={countViewModel.handleMinusCount} />
      </div>
    </>
  );
}

export default observer(CountContainer);
