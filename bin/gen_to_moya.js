const guide_line ="COPY THIS CODE INTO YOUR PROJECT:=========================="
module.exports = exports.default = function(curlJson) {
    const output = `
${guide_line}


public enum YOUR_ENUM {
    case your_api
}

extension YOUR_ENUM: TargetType {
    public var baseURL: URL { URL(string: "${curlJson.origin}")! }
    public var path: String {
        switch self {
        case .your_api:
            return "${curlJson.pathname}"
        }
    }
    public var method: Moya.Method { .${curlJson.method.toLowerCase()} }

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

} `


    return output
}
