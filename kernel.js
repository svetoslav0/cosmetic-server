import {MySqlFactory} from './Common/Database/MySqlFactory.js';
import {TestRepository} from './Repository/TestRepository.js';
import {TestService} from './Service/TestService.js';
import {TestController} from './Controller/TestController.js';
import TestRouter from './Router/TestRouter.js';

const mysqlDatabase = new MySqlFactory();

const testRepository = new TestRepository(mysqlDatabase);

const testService = new TestService(testRepository);

const testController = new TestController(testService);

const testRouter = new TestRouter(testController);

export {
    testRouter,
};
