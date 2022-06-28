import Adapt from 'core/js/adapt';
import RateContentView from './RateContentView';
import RateContentModel from './RateContentModel';

export default Adapt.register('rateContent', {
  model: RateContentModel,
  view: RateContentView
});
