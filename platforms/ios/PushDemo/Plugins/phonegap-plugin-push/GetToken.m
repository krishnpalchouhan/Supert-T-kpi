//
//  CDVPlugin+GetToken.m
//  PushDemo
//
//  Created by prashoor on 02/05/16.
//
//

#import "GetToken.h"
#import "AppDelegate.h"

@implementation GetToken

- (void) getToken:(CDVInvokedUrlCommand*)command; {
    
    AppDelegate * delegate = (AppDelegate *)[UIApplication sharedApplication].delegate;
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:@{@"token":delegate.token}];
    [pluginResult setKeepCallbackAsBool:YES];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
