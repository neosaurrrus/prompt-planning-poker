Welcome to Prompt Planning Poker, an app to help SCRUM teams perform estimations without egos!

Built with React and Redux on the front-end and Rails on the backend.

## Installation
Clone down this repo. Run bundler install to grab all the required dependancies.

### For the backend
Run `rails db:migrate` to build the relevent databases and `rail s` to run it locally. The index.html file in the front end folder will run the frontend.

### For the backend
Run `npm start` to run the React server locally. The index.html file in the front end folder will run the frontend.

**Currently this does not have the enviroment variables configured, so it will require modifying the endpoints found in the index.js folder**

## Usage
The app can be used by anyone to create a new planning session. Once a pin is set and used, new stories can be created. For every story users can select thier estimation from the set of cards shown.

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/'neosaurrrus'/prompt-planning-poker. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
The gem is available as open source under the terms of the MIT License.

## Code of Conduct
Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.
