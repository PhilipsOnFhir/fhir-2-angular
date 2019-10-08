import { DomainResource } from './DomainResource'
import { OperationDefinition_Contact } from './OperationDefinition_Contact'
import { OperationDefinition_Parameter } from './OperationDefinition_Parameter'
import { OperationKindEnum } from './OperationKindEnum'
import { Reference } from './Reference'

export class OperationDefinition      extends DomainResource
{

   static def : string = 'OperationDefinition';
   url : string ;
   version : string ;
   name : string ;
   status : string ;
   kind : OperationKindEnum ;
   experimental : boolean ;
   publisher : string ;
   contact : OperationDefinition_Contact [];
   date : string ;
   description : string ;
   requirements : string ;
   idempotent : boolean ;
   code : string ;
   notes : string ;
   base : Reference ;
   system : boolean ;
   type : string [];
   instance : boolean ;
   parameter : OperationDefinition_Parameter [];
}
