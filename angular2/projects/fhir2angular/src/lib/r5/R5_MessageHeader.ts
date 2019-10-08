import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MessageHeader_Destination } from './R5_MessageHeader_Destination'
import { R5_MessageHeader_Response } from './R5_MessageHeader_Response'
import { R5_MessageHeader_Source } from './R5_MessageHeader_Source'
import { R5_Reference } from './R5_Reference'

export class R5_MessageHeader      extends R5_DomainResource
{

   static def : string = 'MessageHeader';
   eventCoding : R5_Coding ;
   eventUri : string ;
   destination : R5_MessageHeader_Destination [];
   sender : R5_Reference ;
   enterer : R5_Reference ;
   author : R5_Reference ;
   source : R5_MessageHeader_Source ;
   responsible : R5_Reference ;
   reason : R5_CodeableConcept ;
   response : R5_MessageHeader_Response ;
   focus : R5_Reference [];
   definition : string ;
}
