import { isAccountInstrument } from './index';
import { getAccountInstrument, getCardInstrument } from './instruments.mock';

describe('isCardInstrument', () => {
    it('returns true for account instruments', () => {
        expect(isAccountInstrument(getAccountInstrument())).toBeTruthy();
    });

    it('returns false for non account instruments', () => {
        expect(isAccountInstrument(getCardInstrument())).toBeFalsy();
    });
});
