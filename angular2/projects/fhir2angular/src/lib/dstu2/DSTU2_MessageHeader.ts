import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_MessageHeader_Destination } from './DSTU2_MessageHeader_Destination'
import { DSTU2_MessageHeader_Response } from './DSTU2_MessageHeader_Response'
import { DSTU2_MessageHeader_Source } from './DSTU2_MessageHeader_Source'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_MessageHeader      extends DSTU2_DomainResource
{

   static def : string = 'MessageHeader';
   timestamp : string ;
   event : DSTU2_Coding ;
   response : DSTU2_MessageHeader_Response ;
   source : DSTU2_MessageHeader_Source ;
   destination : DSTU2_MessageHeader_Destination [];
   enterer : DSTU2_Reference ;
   author : DSTU2_Reference ;
   receiver : DSTU2_Reference ;
   responsible : DSTU2_Reference ;
   reason : DSTU2_CodeableConcept ;
   data : DSTU2_Reference [];
}
