/** Possible action statuses */

export const ACTION_STATUSES = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCEED: 'succeed',
  FAILED: 'failed',
};

export const INIT_ACTION_STATUSES = {
  INIT: 'init',
  READY: 'ready',
};


const isStatusSucceed = status => status === ACTION_STATUSES.SUCCEED;
const isStatusFailed = status => status === ACTION_STATUSES.FAILED;
const isStatusPending = status => status === ACTION_STATUSES.PENDING;
const isStatusIdle = status => status === ACTION_STATUSES.PENDING;

const isApplicationReady = status => status === INIT_ACTION_STATUSES.READY;

export default {
  isStatusSucceed,
  isStatusPending,
  isStatusFailed,
  isStatusIdle,
  isApplicationReady,
};
