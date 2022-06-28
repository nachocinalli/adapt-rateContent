import React, { useState } from 'react';
import { html, templates } from 'core/js/reactHelpers';

export default function RateContent(props) {
  const { _buttons, feedback, onClick, _isComplete } = props;
  const [rated, setRated] = useState(_isComplete);
  const onRated = (value) => {
    setRated(true);
    onClick(value);
  };
  return (
    <div className="component__inner ratecontent__inner">
      {!rated && <templates.header {...props} />}
      <div className='component__widget ratecontent__widget'>
        {rated
          ? (
            <div className='ratecontent__rated'>{html(feedback)}</div>
          )
          : (
            _buttons.map((button, index) => {
              return (
                <button
                  aria-label={button.ariaLabel}
                  key={index}
                  className={`btn-text ratecontent__button ${button._classes}`}
                  onClick={() => onRated(button)}
                >
                  {button.buttonText}
                </button>
              );
            }
            )
          )}
      </div>
    </div>
  );
}
