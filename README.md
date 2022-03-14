# moya_generator

## Install 
```
npm install -g moya-gen
```
## Usage
```
moya-gen -c "<your-curl>"
```
## Example 
```
 moya-gen -c "curl --location --request GET 'http://localhost:8002/v1/api/search'"
```

Output 
```
COPY THIS CODE INTO YOUR PROJECT:==========================


public enum YOUR_ENUM {
    case your_api
}

extension YOUR_ENUM: TargetType {
    public var baseURL: URL { URL(string: "http://localhost:8002")! }
    public var path: String {
        switch self {
        case .your_api:
            return "/v1/api/search"
        }
    }
    public var method: Moya.Method { .get }

    public var task: Task {
        switch self {
        default:
            return .requestPlain
        }
    }
    public var sampleData: Data {
        return Data()
    }
    public var headers: [String: String]? { nil }

} 
```