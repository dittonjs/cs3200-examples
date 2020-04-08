#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MathyStuff, NSObject)

RCT_EXTERN_METHOD(addTwoNumbers:(NSInteger)num1 num2:(NSInteger)num2 callback:(RCTResponseSenderBlock)callback)

@end
