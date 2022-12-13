import PropTypes from 'prop-types';

export function Notification({ message }) {
  return (
    <div>
      <p>{message ? message : ''}</p>
    </div>
  );
}
