import ComponentView from 'core/js/views/componentView';
import Adapt from 'core/js/adapt';
class RateContentView extends ComponentView {
  preRender() {
    this.onClick = this.onClick.bind(this);
  }

  postRender() {
    this.setReadyStatus();
    if (this.model.get('_setCompletionOn') === 'inview') {
      this.setupInviewCompletion('.component__widget');
    }
  }

  onClick(item) {
    _.delay(() => {
      this.setCompletionStatus();
      const _currentModel = Adapt.location._currentModel;

      const params = {
        id: _currentModel.get('_id'),
        title: _currentModel.get('title'),
        completed: _currentModel.get('_isComplete'),
        percentage: _currentModel.get('percentageComplete') || 0,
        label: item.buttonText || item.ariaLabel || '',
        value: item.value
      };
      Adapt.trigger('rateContent', params);
      // eslint-disable-next-line no-undef
      if (typeof gtag === 'undefined') return;

      // eslint-disable-next-line no-undef
      gtag('event', 'rate_content', params);

    });
  }
}

RateContentView.template = 'rate-content.jsx';

export default RateContentView;
