import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_OperationDefinition_Contact } from './DSTU2_OperationDefinition_Contact'
import { DSTU2_OperationDefinition_Parameter } from './DSTU2_OperationDefinition_Parameter'
import { DSTU2_OperationKindEnum } from './DSTU2_OperationKindEnum'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_OperationDefinition      extends DSTU2_DomainResource
{

   static def : string = 'OperationDefinition';
   url : string ;
   version : string ;
   name : string ;
   status : string ;
   kind : DSTU2_OperationKindEnum ;
   experimental : boolean ;
   publisher : string ;
   contact : DSTU2_OperationDefinition_Contact [];
   date : string ;
   description : string ;
   requirements : string ;
   idempotent : boolean ;
   code : string ;
   notes : string ;
   base : DSTU2_Reference ;
   system : boolean ;
   type : string [];
   instance : boolean ;
   parameter : DSTU2_OperationDefinition_Parameter [];
}
