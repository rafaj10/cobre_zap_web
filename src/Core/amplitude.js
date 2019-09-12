import amplitude from 'amplitude-js';

amplitude.getInstance(process.env.REACT_APP_AMPLITUDE_PROJECT).init(process.env.REACT_APP_AMPLITUDE_KEY);

export const logEvent = (event, data) => {
    amplitude.getInstance(process.env.REACT_APP_AMPLITUDE_PROJECT).logEvent(process.env.REACT_APP_AMPLITUDE_PROJECT + '-' + event, data);
};