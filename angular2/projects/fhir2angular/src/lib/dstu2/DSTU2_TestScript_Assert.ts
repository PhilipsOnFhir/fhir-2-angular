import { DSTU2_AssertionDirectionTypeEnum } from './DSTU2_AssertionDirectionTypeEnum'
import { DSTU2_AssertionOperatorTypeEnum } from './DSTU2_AssertionOperatorTypeEnum'
import { DSTU2_AssertionResponseTypesEnum } from './DSTU2_AssertionResponseTypesEnum'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_ContentTypeEnum } from './DSTU2_ContentTypeEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_TestScript_Assert      extends DSTU2_BackboneElement
{

   static def : string = 'TestScript_Assert';
   label : string ;
   description : string ;
   direction : DSTU2_AssertionDirectionTypeEnum ;
   compareToSourceId : string ;
   compareToSourcePath : string ;
   contentType : DSTU2_ContentTypeEnum ;
   headerField : string ;
   minimumId : string ;
   navigationLinks : boolean ;
   operator : DSTU2_AssertionOperatorTypeEnum ;
   path : string ;
   resource : string ;
   response : DSTU2_AssertionResponseTypesEnum ;
   responseCode : string ;
   sourceId : string ;
   validateProfileId : string ;
   value : string ;
   warningOnly : boolean ;
}
