# React Native Production Template

A clean React Native starter template based on **Expo**, **TypeScript**, **React Navigation**, and a modular project structure.

The template is intended for **Android and iOS** development with **Expo Go**.

## Requirements

Before starting, make sure you have:

- Node.js compatible with the current Expo SDK
- npm
- Expo Go installed on your Android or iOS device
- Git

It is also recommended to keep Expo Go updated to the version compatible with the Expo SDK used by the project.

## Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd react-native-prod-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

This starts the Expo/Metro development server in **Expo Go** mode.

After startup, scan the QR code:

- **iOS:** use the Camera app
- **Android:** use the QR scanner inside Expo Go

Your phone and computer should normally be connected to the same local network.

## Available Scripts

### Start Expo Go

```bash
npm start
```

Starts the Metro development server and opens the project in Expo Go mode.

### Start with a clean Metro cache

```bash
npm run start:clear
```

Useful when Metro caching causes unexpected behavior after changing dependencies, aliases, assets, or configuration.

### Open on Android

```bash
npm run android
```

Starts the Expo development server and tries to open the project on a connected Android device or emulator.

### Open on iOS

```bash
npm run ios
```

Starts the Expo development server and tries to open the project in the iOS simulator.

The iOS simulator requires macOS and Xcode.

### Format the project

```bash
npm run format
```

Formats supported project files with Prettier.

### Check formatting

```bash
npm run format:check
```

Checks whether files match the configured Prettier style without modifying them.

### Run ESLint

```bash
npm run lint
```

Runs Expo's ESLint configuration.

### Run TypeScript checks

```bash
npm run type-check
```

Runs TypeScript type checking without generating output files.

---

## Useful Commands Before Starting Work

### Check the Expo project

```bash
npx expo-doctor
```

Checks the project configuration, dependency compatibility, Expo SDK setup, and common configuration issues.

It is useful after:

- upgrading Expo
- installing or removing native dependencies
- changing `app.json`
- updating React Native packages

### Install Expo-compatible packages

For libraries that interact with React Native or Expo, prefer:

```bash
npx expo install <package-name>
```

instead of:

```bash
npm install <package-name>
```

`expo install` selects a package version compatible with the current Expo SDK when possible.

Example:

```bash
npx expo install expo-image-picker
```

For ordinary JavaScript-only packages, regular npm installation is fine:

```bash
npm install zustand
```

### Fix Expo dependency versions

If the Expo SDK was upgraded or package versions became incompatible:

```bash
npx expo install --fix
```

Expo will suggest and install versions compatible with the currently installed SDK.

### Start Metro manually

The development server used by Expo is based on **Metro**.

The basic command is:

```bash
npx expo start --go
```

This is effectively what the project's `npm start` script is intended to run.

### Clear Metro cache

```bash
npx expo start --go --clear
```

or:

```bash
npm run start:clear
```

This is one of the first things to try if imports, assets, fonts, or dependency changes do not appear correctly.

### Use LAN mode

```bash
npx expo start --go --lan
```

LAN is usually the fastest option when the computer and phone are on the same network.

### Use tunnel mode

```bash
npx expo start --go --tunnel
```

Tunnel mode can help when the phone cannot connect to the development server over the local network.

It may be slower than LAN mode, but is useful with:

- restrictive Wi-Fi networks
- some VPN configurations
- different network interfaces
- local firewall/network issues

### Use localhost

```bash
npx expo start --go --localhost
```

Useful mainly when running an emulator or simulator on the same computer.

A physical phone normally cannot access your computer through `localhost`.

### Open Expo developer tools

After running:

```bash
npm start
```

the terminal exposes Expo shortcuts for common development actions.

Depending on the current Expo CLI version, these can include actions such as:

- opening Android
- opening iOS
- reloading the application
- opening developer tools
- toggling development options

The available shortcuts are displayed directly in the terminal.

### Reload after configuration changes

For ordinary TypeScript or React code changes, Fast Refresh usually updates the app automatically.

After changing files such as:

```text
app.json
package.json
tsconfig.json
eslint.config.js
```

or after installing dependencies, restart the development server.

For cache-sensitive changes:

```bash
npm run start:clear
```

### Verify TypeScript before committing

```bash
npm run type-check
```

This catches problems that may not immediately appear in the running application, including:

- invalid types
- missing exports
- broken imports
- incorrect navigation parameters

### Verify formatting before committing

```bash
npm run format:check
```

To automatically fix formatting:

```bash
npm run format
```

### Verify ESLint before committing

```bash
npm run lint
```

A useful pre-commit routine is:

```bash
npm run format
npm run lint
npm run type-check
```

## Project Structure

```text
src
├── app
│   ├── navigation
│   │   ├── index.ts
│   │   ├── RootNavigator.tsx
│   │   └── types.ts
│   └── App.tsx
│
├── assets
│   ├── fonts
│   ├── icon.png
│   ├── adaptive-icon.png
│   └── splash-icon.png
│
├── modules
│   ├── example
│   └── home
│
├── shared
├── styles
└── types.d.ts
```

### `app`

Application-level initialization and navigation.

### `modules`

Feature modules.

Each module can contain its own:

```text
api
components
hooks
screens
store
types
utils
```

Module-specific logic should stay inside its module whenever possible.

### `shared`

Reusable application-wide code that is not tied to one feature.

Typical examples:

```text
shared
├── api
├── ui
├── hooks
├── types
├── utils
└── constants
```

### `styles`

Shared design tokens and common styling definitions such as:

- colors
- spacing
- typography
- fonts
- shadows
- theme values

Component- and screen-specific styles should generally stay next to the corresponding component or screen.

### `assets`

Static application resources such as:

- images
- icons
- fonts

## Import Alias

The project uses:

```text
@ → src
```

Example:

```ts
import { HomeScreen } from '@/modules/home';
```

instead of:

```ts
import { HomeScreen } from '../../modules/home';
```

## Expo Go Limitations

Expo Go is convenient for rapid development, but it only contains native modules already included in the Expo Go application.

If a future dependency requires custom native code that Expo Go does not provide, the project will need to move to an Expo Development Build.

For the current template, Expo Go is the default development workflow.

## Recommended Workflow

Before starting a new feature:

```bash
git pull
npm install
npx expo-doctor
npm start
```

Before committing:

```bash
npm run format
npm run lint
npm run type-check
```

If Metro behaves unexpectedly:

```bash
npm run start:clear
```

If Expo dependencies become incompatible:

```bash
npx expo install --fix
npx expo-doctor
```

---

# React Native Production Template

Чистый стартовый шаблон React Native на базе **Expo**, **TypeScript**, **React Navigation** и модульной архитектуры.

Шаблон предназначен для разработки под **Android и iOS** через **Expo Go**.

## Требования

Перед началом работы убедись, что установлены:

- Node.js, совместимый с текущей версией Expo SDK
- npm
- Expo Go на Android- или iOS-устройстве
- Git

Также рекомендуется использовать актуальную версию Expo Go, совместимую с Expo SDK проекта.

## Быстрый запуск

### 1. Клонировать репозиторий

```bash
git clone <repository-url>
cd react-native-prod-template
```

### 2. Установить зависимости

```bash
npm install
```

### 3. Запустить dev-сервер

```bash
npm start
```

Команда запускает development server Expo/Metro в режиме **Expo Go**.

После запуска отсканируй QR-код:

- **iOS:** через стандартное приложение «Камера»
- **Android:** через QR-сканер внутри Expo Go

Обычно компьютер и телефон должны находиться в одной локальной сети.

## Доступные скрипты

### Запустить Expo Go

```bash
npm start
```

Запускает Metro development server и проект в режиме Expo Go.

### Запустить с очисткой кеша Metro

```bash
npm run start:clear
```

Полезно, если после изменения зависимостей, алиасов, assets или конфигурации Metro ведёт себя некорректно.

### Запустить на Android

```bash
npm run android
```

Запускает Expo development server и пытается открыть проект на подключённом Android-устройстве или эмуляторе.

### Запустить на iOS

```bash
npm run ios
```

Запускает Expo development server и пытается открыть проект в iOS Simulator.

Для iOS Simulator необходимы macOS и Xcode.

### Отформатировать проект

```bash
npm run format
```

Форматирует поддерживаемые файлы проекта с помощью Prettier.

### Проверить форматирование

```bash
npm run format:check
```

Проверяет соответствие файлов правилам Prettier без их изменения.

### Запустить ESLint

```bash
npm run lint
```

Запускает ESLint с конфигурацией Expo.

### Проверить TypeScript

```bash
npm run type-check
```

Запускает проверку TypeScript без генерации выходных файлов.

---

## Полезные команды перед началом работы

### Проверить Expo-проект

```bash
npx expo-doctor
```

Проверяет конфигурацию проекта, совместимость зависимостей, Expo SDK и типичные проблемы настройки.

Полезно запускать после:

- обновления Expo
- установки или удаления native-зависимостей
- изменения `app.json`
- обновления React Native-пакетов

### Устанавливать Expo-совместимые пакеты

Для библиотек, связанных с React Native или Expo, лучше использовать:

```bash
npx expo install <package-name>
```

вместо:

```bash
npm install <package-name>
```

`expo install` по возможности выбирает версию пакета, совместимую с текущим Expo SDK.

Например:

```bash
npx expo install expo-image-picker
```

Для обычных JavaScript-библиотек можно использовать npm:

```bash
npm install zustand
```

### Исправить версии Expo-зависимостей

Если Expo SDK был обновлён или версии зависимостей перестали быть совместимыми:

```bash
npx expo install --fix
```

Expo предложит и установит версии, совместимые с текущим SDK.

### Запустить Metro вручную

Development server Expo основан на **Metro**.

Базовая команда:

```bash
npx expo start --go
```

Именно этот сценарий должен использовать скрипт:

```bash
npm start
```

### Очистить кеш Metro

```bash
npx expo start --go --clear
```

или:

```bash
npm run start:clear
```

Это одна из первых команд, которую стоит попробовать, если изменения импортов, assets, шрифтов или зависимостей отображаются некорректно.

### LAN-режим

```bash
npx expo start --go --lan
```

LAN обычно является самым быстрым вариантом, если телефон и компьютер находятся в одной сети.

### Tunnel-режим

```bash
npx expo start --go --tunnel
```

Tunnel может помочь, если телефон не может подключиться к development server через локальную сеть.

Он может работать медленнее LAN, но полезен при:

- ограничениях Wi-Fi-сети
- некоторых VPN-конфигурациях
- нескольких сетевых интерфейсах
- проблемах firewall или локальной сети

### Localhost

```bash
npx expo start --go --localhost
```

В основном подходит для эмулятора или симулятора, работающего на том же компьютере.

Физический телефон обычно не сможет обратиться к компьютеру через `localhost`.

### Developer tools Expo

После запуска:

```bash
npm start
```

в терминале будут отображены доступные горячие клавиши Expo.

В зависимости от версии Expo CLI там могут быть команды для:

- запуска Android
- запуска iOS
- перезагрузки приложения
- открытия developer tools
- переключения development-настроек

Актуальный список всегда отображается непосредственно в терминале.

### Перезапуск после изменения конфигурации

При обычных изменениях React/TypeScript-кода приложение обычно обновляется автоматически через Fast Refresh.

После изменения файлов вроде:

```text
app.json
package.json
tsconfig.json
eslint.config.js
```

или после установки новых зависимостей development server лучше перезапустить.

Если изменения связаны с кешем:

```bash
npm run start:clear
```

### Проверить TypeScript перед коммитом

```bash
npm run type-check
```

Проверка помогает поймать ошибки, которые не всегда сразу проявляются в запущенном приложении:

- неправильные типы
- отсутствующие exports
- сломанные imports
- неправильные параметры navigation

### Проверить форматирование перед коммитом

```bash
npm run format:check
```

Для автоматического исправления:

```bash
npm run format
```

### Проверить ESLint перед коммитом

```bash
npm run lint
```

Удобная последовательность перед коммитом:

```bash
npm run format
npm run lint
npm run type-check
```

## Структура проекта

```text
src
├── app
│   ├── navigation
│   │   ├── index.ts
│   │   ├── RootNavigator.tsx
│   │   └── types.ts
│   └── App.tsx
│
├── assets
│   ├── fonts
│   ├── icon.png
│   ├── adaptive-icon.png
│   └── splash-icon.png
│
├── modules
│   ├── example
│   └── home
│
├── shared
├── styles
└── types.d.ts
```

### `app`

Инициализация приложения и navigation верхнего уровня.

### `modules`

Функциональные модули приложения.

Каждый модуль при необходимости может содержать:

```text
api
components
hooks
screens
store
types
utils
```

Логику конкретной функциональности желательно оставлять внутри соответствующего модуля.

### `shared`

Переиспользуемый код всего приложения, который не относится к одному конкретному модулю.

Например:

```text
shared
├── api
├── ui
├── hooks
├── types
├── utils
└── constants
```

### `styles`

Общие design tokens и стили:

- цвета
- отступы
- типографика
- шрифты
- тени
- theme values

Стили конкретного компонента или экрана обычно должны находиться рядом с самим компонентом или экраном.

### `assets`

Статические ресурсы приложения:

- изображения
- иконки
- шрифты

## Алиас импортов

В проекте используется:

```text
@ → src
```

Например:

```ts
import { HomeScreen } from '@/modules/home';
```

вместо:

```ts
import { HomeScreen } from '../../modules/home';
```

## Ограничения Expo Go

Expo Go удобен для быстрой разработки, но содержит только те native-модули, которые уже встроены в само приложение Expo Go.

Если в будущем проекту понадобится библиотека с custom native code, которого нет в Expo Go, потребуется перейти на Expo Development Build.

Для текущего шаблона основным способом разработки является Expo Go.

## Рекомендуемый рабочий процесс

Перед началом работы:

```bash
git pull
npm install
npx expo-doctor
npm start
```

Перед коммитом:

```bash
npm run format
npm run lint
npm run type-check
```

Если Metro работает некорректно:

```bash
npm run start:clear
```

Если Expo-зависимости стали несовместимыми:

```bash
npx expo install --fix
npx expo-doctor
```
