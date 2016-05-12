//
//  CDVPlugin+GetToken.h
//  PushDemo
//
//  Created by prashoor on 02/05/16.
//
//

#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>
#import <Cordova/CDVPlugin.h>

@interface GetToken : CDVPlugin

- (void) getToken:(CDVInvokedUrlCommand*)command;;

@end
