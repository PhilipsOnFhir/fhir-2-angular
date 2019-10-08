import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MessageHeader_Destination } from './R4_1_MessageHeader_Destination'
import { R4_1_MessageHeader_Response } from './R4_1_MessageHeader_Response'
import { R4_1_MessageHeader_Source } from './R4_1_MessageHeader_Source'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MessageHeader      extends R4_1_DomainResource
{

   static def : string = 'MessageHeader';
   eventCoding : R4_1_Coding ;
   eventUri : string ;
   destination : R4_1_MessageHeader_Destination [];
   sender : R4_1_Reference ;
   enterer : R4_1_Reference ;
   author : R4_1_Reference ;
   source : R4_1_MessageHeader_Source ;
   responsible : R4_1_Reference ;
   reason : R4_1_CodeableConcept ;
   response : R4_1_MessageHeader_Response ;
   focus : R4_1_Reference [];
   definition : string ;
}
