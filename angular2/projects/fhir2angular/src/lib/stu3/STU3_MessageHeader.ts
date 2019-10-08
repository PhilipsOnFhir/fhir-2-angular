import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_MessageHeader_Destination } from './STU3_MessageHeader_Destination'
import { STU3_MessageHeader_Response } from './STU3_MessageHeader_Response'
import { STU3_MessageHeader_Source } from './STU3_MessageHeader_Source'
import { STU3_Reference } from './STU3_Reference'

export class STU3_MessageHeader      extends STU3_DomainResource
{

   static def : string = 'MessageHeader';
   event : STU3_Coding ;
   destination : STU3_MessageHeader_Destination [];
   receiver : STU3_Reference ;
   sender : STU3_Reference ;
   timestamp : string ;
   enterer : STU3_Reference ;
   author : STU3_Reference ;
   source : STU3_MessageHeader_Source ;
   responsible : STU3_Reference ;
   reason : STU3_CodeableConcept ;
   response : STU3_MessageHeader_Response ;
   focus : STU3_Reference [];
}
