#!/usr/bin/env node
const yargs = require("yargs");
const dotenv = require( "dotenv");
const parse = require('./pare-json');
const info = require('./info');

dotenv.config();

info();

const options = yargs
    .usage("Usage: -c <curl>")
    .option("c", { alias: "curl", describe: "Your curl", type: "string", demandOption: true })
    .argv;

const out = parse(options.c);

// let url = new URL(out.url);

// const pareOutput = `
// public enum GitHub {
//     case zen
// }

// extension GitHub: TargetType {
//     public var baseURL: URL { URL(string: "${out.url}")! }
//     public var path: String {
//         switch self {
//         case .zen:
//             return "/zen"
//         }
//     }

//     public var method: Moya.Method { .get }

//     public var task: Task {
//         switch self {
//         case .userRepositories:
//             return .requestParameters(parameters: ["sort": "pushed"], encoding: URLEncoding.default)
//         default:
//             return .requestPlain
//         }
//     }
//     public var validationType: ValidationType {
//         switch self {
//         case .zen:
//             return .successCodes
//         default:
//             return .none
//         }
//     }
//     public var sampleData: Data {
//         return Data()
//     }
//     public var headers: [String: String]? { nil }

// }
// `;

console.log(JSON.stringify(out, null, 2))

// console.log(pareOutput);
