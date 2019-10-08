import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MessageHeader_Destination } from './R4_MessageHeader_Destination'
import { R4_MessageHeader_Response } from './R4_MessageHeader_Response'
import { R4_MessageHeader_Source } from './R4_MessageHeader_Source'
import { R4_Reference } from './R4_Reference'

export class R4_MessageHeader      extends R4_DomainResource
{

   static def : string = 'MessageHeader';
   eventCoding : R4_Coding ;
   eventUri : string ;
   destination : R4_MessageHeader_Destination [];
   sender : R4_Reference ;
   enterer : R4_Reference ;
   author : R4_Reference ;
   source : R4_MessageHeader_Source ;
   responsible : R4_Reference ;
   reason : R4_CodeableConcept ;
   response : R4_MessageHeader_Response ;
   focus : R4_Reference [];
   definition : string ;
}
