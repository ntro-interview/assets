/******/ (() => { // webpackBootstrap
/*!*************************************!*\
  !*** ./src/scripts/mobile-login.ts ***!
  \*************************************/
// import memberstackDOM from '@memberstack/dom';

// const memberstack = memberstackDOM.init({
//   publicKey: process.env.MEMBERSTACK_PUBLIC_KEY as string,
// });
// document.querySelector('.forgot-password-button')?.addEventListener('click', (e) => {
//   e.stopImmediatePropagation();
//   e.preventDefault();

//   window.ReactNativeWebView.postMessage(JSON.stringify({ msg: 'forgot-password' }));
// });
// document.querySelector('.login-button')?.addEventListener('click', async (e) => {
//   e.stopImmediatePropagation();
//   e.preventDefault();

//   const $email = document.querySelector('#email') as HTMLInputElement;
//   const $password = document.querySelector('#password') as HTMLInputElement;

//   if ($email && $email.value.length === 0) {
//     (($email.parentNode as HTMLElement).parentNode as HTMLElement).classList.add('error');
//   } else {
//     (($email.parentNode as HTMLElement).parentNode as HTMLElement).classList.remove('error');
//   }

//   if ($password.value.length === 0) {
//     (($password.parentNode as HTMLElement).parentNode as HTMLElement).classList.add('error');
//   } else {
//     (($password.parentNode as HTMLElement).parentNode as HTMLElement).classList.remove('error');
//   }

//   const email = $email.value;
//   const password = $password.value;
//   window.ReactNativeWebView.postMessage(JSON.stringify({ msg: memberstack ? 'login' : 'memberstack is null' }));
//   try {
//     const loginResult = await memberstack.loginMemberEmailPassword({
//       email,
//       password
//     });
//     window.ReactNativeWebView.postMessage(JSON.stringify({ msg: 'login', data: JSON.stringify(loginResult) }));
//   } catch (e: any) {
//     window.ReactNativeWebView.postMessage(JSON.stringify({ msg: 'login', data: JSON.stringify({error: e.message}) }));
//   }

// });
function testFunction() {
  window.ReactNativeWebView.postMessage(JSON.stringify({
    msg: 'test'
  }));
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS9tb2JpbGUtbG9naW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTQSxZQUFZQSxDQUFBLEVBQUc7RUFDdEJDLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUNDLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUM7SUFBRUMsR0FBRyxFQUFFO0VBQU8sQ0FBQyxDQUFDLENBQUM7QUFDeEUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVydmlld19jb3BpbG90Ly4vc3JjL3NjcmlwdHMvbW9iaWxlLWxvZ2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBtZW1iZXJzdGFja0RPTSBmcm9tICdAbWVtYmVyc3RhY2svZG9tJztcclxuXHJcbi8vIGNvbnN0IG1lbWJlcnN0YWNrID0gbWVtYmVyc3RhY2tET00uaW5pdCh7XHJcbi8vICAgcHVibGljS2V5OiBwcm9jZXNzLmVudi5NRU1CRVJTVEFDS19QVUJMSUNfS0VZIGFzIHN0cmluZyxcclxuLy8gfSk7XHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3Jnb3QtcGFzc3dvcmQtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuLy8gICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbi8vICAgd2luZG93LlJlYWN0TmF0aXZlV2ViVmlldy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7IG1zZzogJ2ZvcmdvdC1wYXNzd29yZCcgfSkpO1xyXG4vLyB9KTtcclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbi8vICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4vLyAgIGNvbnN0ICRlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbi8vICAgY29uc3QgJHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBcclxuXHJcbi8vICAgaWYgKCRlbWFpbCAmJiAkZW1haWwudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbi8vICAgICAoKCRlbWFpbC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICAoKCRlbWFpbC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgaWYgKCRwYXNzd29yZC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuLy8gICAgICgoJHBhc3N3b3JkLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgICgoJHBhc3N3b3JkLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25zdCBlbWFpbCA9ICRlbWFpbC52YWx1ZTtcclxuLy8gICBjb25zdCBwYXNzd29yZCA9ICRwYXNzd29yZC52YWx1ZTtcclxuLy8gICB3aW5kb3cuUmVhY3ROYXRpdmVXZWJWaWV3LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHsgbXNnOiBtZW1iZXJzdGFjayA/ICdsb2dpbicgOiAnbWVtYmVyc3RhY2sgaXMgbnVsbCcgfSkpO1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBsb2dpblJlc3VsdCA9IGF3YWl0IG1lbWJlcnN0YWNrLmxvZ2luTWVtYmVyRW1haWxQYXNzd29yZCh7XHJcbi8vICAgICAgIGVtYWlsLFxyXG4vLyAgICAgICBwYXNzd29yZFxyXG4vLyAgICAgfSk7XHJcbi8vICAgICB3aW5kb3cuUmVhY3ROYXRpdmVXZWJWaWV3LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHsgbXNnOiAnbG9naW4nLCBkYXRhOiBKU09OLnN0cmluZ2lmeShsb2dpblJlc3VsdCkgfSkpO1xyXG4vLyAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4vLyAgICAgd2luZG93LlJlYWN0TmF0aXZlV2ViVmlldy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7IG1zZzogJ2xvZ2luJywgZGF0YTogSlNPTi5zdHJpbmdpZnkoe2Vycm9yOiBlLm1lc3NhZ2V9KSB9KSk7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyB9KTtcclxuZnVuY3Rpb24gdGVzdEZ1bmN0aW9uKCkge1xyXG4gIHdpbmRvdy5SZWFjdE5hdGl2ZVdlYlZpZXcucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoeyBtc2c6ICd0ZXN0JyB9KSk7XHJcbn0iXSwibmFtZXMiOlsidGVzdEZ1bmN0aW9uIiwid2luZG93IiwiUmVhY3ROYXRpdmVXZWJWaWV3IiwicG9zdE1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==