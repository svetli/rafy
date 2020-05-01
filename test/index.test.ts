import Rafy from '../src/index';

describe('instance', (): void => {
  let rafy: Rafy;
  let time: number;

  beforeEach((): void => {
    time = 0;

    jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb): number => {
        time += 100;
        if (time <= 1000) {
          cb(time);
        }
        return time;
      });

    rafy = new Rafy();
  });

  describe('add', (): void => {
    it('should add callback', (): void => {
      const fn = jest.fn();

      const result = rafy.add(fn);
      expect(result).toBeTruthy();

      rafy.start();
      rafy.stop();

      expect(fn).toHaveBeenCalled();
    });
  });

  describe('remove', () => {
    it('should remove callback', (): void => {
      const fn = jest.fn();

      const result = rafy.add(fn);
      expect(result).toBeTruthy();

      rafy.remove(fn);
      rafy.start();
      rafy.stop();

      expect(fn).not.toHaveBeenCalled();
    });

    it('should not remove other callbacks', (): void => {
      const fn1 = jest.fn();
      const fn2 = jest.fn();

      rafy.add(fn1);
      rafy.add(fn2);

      rafy.remove(fn1);
      rafy.start();
      rafy.stop();

      expect(fn1).not.toHaveBeenCalled();
      expect(fn2).toHaveBeenCalled();
    });
  });
});
