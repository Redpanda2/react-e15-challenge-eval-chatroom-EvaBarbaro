// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Input from 'src/containers/Settings/Input';
import Button from 'src/containers/Settings/Button';

import './settings.scss';

// == Composant
const Settings = ({ input }) => (
  <>
    {input === false && <Button />}
    {input === true && <Input />}
  </>
);

Settings.propTypes = {
  input: PropTypes.bool.isRequired,
};


// == Export
export default Settings;
