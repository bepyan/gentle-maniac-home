export const toFit = (
  cb,
  option = {
    dismissCondition: () => false,
    triggerCondition: () => true,
  }
) => {
  if (!cb) throw Error("Invalid required arguments");

  let tick = false;

  return (e) => {
    if (tick) return;

    tick = true;
    return requestAnimationFrame(() => {
      if (option.dismissCondition()) {
        tick = false;
        return;
      }

      if (option.triggerCondition()) {
        tick = false;
        return cb(e);
      }
    });
  };
};
