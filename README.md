# Rapid Adventures

### Developer Setup

Install: `yarn`

Watch: `yarn watch`

Run Frontend: `cd packages/apps/dapp ; yarn start`

# Sprint Overview

## Pre-Sprint Planning

- [x] Pick Application/Site Application Stack
  - [x] Frontend (React)
  - [x] Backend (AWS)
- [x] Set Application/Site Design System
  - [x] Font Family
  - [x] Color Palette
  - [ ] UI Icon Set (Iconicons, FontAwesome, etc...)
- [ ] Save Initial Design Assets
  - [ ] Images (https://unsplash.com)
  - [ ] Illustrations (https://undraw.co)
  - [ ] Icons (http://flaticon.com | https://thenounproject.com)
- [ ] Initial Site Routing, Structure, and Content Overview
  - [x] Simple Route List
  - [ ] User Experience Flow (Mindmap/Diagram/Flow)
- [ ] Initial Marketing Overview
  - [ ] Data Collection/Storage
  - [ ] Email Service/Campaigns

## Sprint 1

- [ ] Content v0.0.1
  - [ ] About
  - [ ] What is Rapid Adventures
  - [ ] What is a Quest
  - [ ] What is An Adventure
  - [ ] What is MESH Token
  - [ ] Start Earning Mesh Token
- [ ] Site Structure v0.0.1
  - [ ] Add Initial Pages/Content
  - [ ] Create Initial Forms Templates
- [ ] Site Services v0.0.1
  - [ ] Authentication (OAuth or 3Box)
  - [ ] Forms Created w/ Validation (Yup.js)
- [ ] Features v0.0.1
  - [ ] Add Proposed Feature(s) Dependencies
  - [ ] Create Initial Helper Libraries if Required

## Sprint 2

- [ ] Quality Assurance
  - [ ] Start Initial Minor Issues To-Do List
- [ ] Content v0.0.2
  - [ ] General Copyedit Improvements
  - [ ] Project Release Blurb (300 - 500 Words)

### [EXPERIMENTAL] GitHub Package Registry

ethers-react-system releases trigger a npm publish to GitHub Package Registry (rapid-eth)

To logon,
1. Create an .npmrc at the project root
  Paste this in:

    `@rapid-eth:registry=https://npm.pkg.github.com/rapid-eth/`
2. Get a Github Personal Access Token
  Paste it into the next line:
    `//npm.pkg.github.com/:_authToken=<YOURTOKENHERE>`

3. package.json with a 'scoped' package dep looks like this:
    `"@rapid-eth/ethers-react-system": "0.0.1-beta4",`

4. Run `yarn install --verbose `