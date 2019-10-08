import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Signature      extends DSTU2_Element
{

   static def : string = 'Signature';
   type : DSTU2_Coding [];
   when : string ;
   whoUri : string ;
   whoReference : DSTU2_Reference ;
   contentType : string ;
   blob : string ;
}
