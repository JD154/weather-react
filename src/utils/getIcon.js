import noData from '../assets/icons/00.png';
import clearDay from '../assets/icons/01d.png';
import clearNight from '../assets/icons/01n.png';
import cloudsDay from '../assets/icons/02d.png';
import cloudsNight from '../assets/icons/02n.png';
import cloudyDay from '../assets/icons/03d.png';
import cloudyNight from '../assets/icons/03n.png';
import brokenDay from '../assets/icons/04d.png';
import brokenNight from '../assets/icons/04n.png';
import rainDay from '../assets/icons/09d.png';
import rainNight from '../assets/icons/09n.png';
import rainyDay from '../assets/icons/10d.png';
import rainyNight from '../assets/icons/10n.png';
import stormDay from '../assets/icons/11d.png';
import stormNight from '../assets/icons/11n.png';
import snowDay from '../assets/icons/13d.png';
import snowNight from '../assets/icons/13n.png';
import mistDay from '../assets/icons/50d.png';
import mistNight from '../assets/icons/50n.png';

export default function getIcon(iconCode) {
  if (iconCode === '00') { return noData; }

  if (iconCode === '01d') { return clearDay; }

  if (iconCode === '01n') { return clearNight; }

  if (iconCode === '02d') { return cloudsDay; }

  if (iconCode === '02n') { return cloudsNight; }

  if (iconCode === '03d') { return cloudyDay; }

  if (iconCode === '03n') { return cloudyNight; }

  if (iconCode === '04d') { return brokenDay; }

  if (iconCode === '04n') { return brokenNight; }

  if (iconCode === '09d') { return rainDay; }

  if (iconCode === '09n') { return rainNight; }

  if (iconCode === '10d') { return rainyDay; }

  if (iconCode === '10n') { return rainyNight; }

  if (iconCode === '11d') { return stormDay; }

  if (iconCode === '11n') { return stormNight; }

  if (iconCode === '13d') { return snowDay; }

  if (iconCode === '13n') { return snowNight; }

  if (iconCode === '50d') { return mistDay; }

  if (iconCode === '50n') { return mistNight; }

  return null;
}
